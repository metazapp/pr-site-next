import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // In a real implementation, you would:
    // 1. Send the data to your email service (SendGrid, Mailgun, etc.)
    // 2. Store the inquiry in a database
    // 3. Set up notification systems
    
    // For example:
    // await sendEmail({
    //   to: 'info@prplastics.in',
    //   subject: `New inquiry from ${name}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Phone: ${phone || 'Not provided'}
    //     Company: ${company || 'Not provided'}
    //     Message: ${message}
    //   `,
    // })
    
    // Mock successful response
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}