import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, company, industry, productType, quantity, message } = await req.json()

    // Email content
    const emailContent = `
New Contact Form Submission from Srinivasa Polypack Website

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}
Industry: ${industry || 'Not specified'}

Product Requirements:
Product Type: ${productType}
Expected Quantity: ${quantity}

Message:
${message}

---
This submission was sent from the Srinivasa Polypack website contact form.
Please respond to the customer at: ${email}
    `.trim()

    // For now, we'll log the submission and return success
    // In a production setup, you would integrate with your email service here
    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Customer:', name, '(', email, ')')
    console.log('Phone:', phone)
    console.log('Company:', company || 'Not provided')
    console.log('Industry:', industry || 'Not specified')
    console.log('Product:', productType)
    console.log('Quantity:', quantity)
    console.log('Message:', message)
    console.log('=================================')

    // Here you would integrate with Yahoo SMTP using your app password
    // Example with a simple email service integration:
    /*
    const emailResponse = await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('YAHOO_APP_PASSWORD')}`,
      },
      body: JSON.stringify({
        to: 'srinivasapolypack@yahoo.com',
        from: email,
        subject: `New Quote Request from ${name}`,
        text: emailContent,
      }),
    });
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your quote request has been submitted successfully! We will contact you within 24 hours with detailed pricing and availability.' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'There was an error submitting your request. Please try calling us directly or try again later.' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})