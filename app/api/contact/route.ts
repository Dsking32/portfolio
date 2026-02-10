import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend - ALWAYS to your email in test mode
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['dsking32@gmail.com'], // Only to you
      subject: subject || `New message from ${name} on your portfolio`,
      replyTo: email, // FIXED: Changed from reply_to to replyTo
      text: `
        New message from your portfolio:
        
        From: ${name} <${email}>
        Subject: ${subject || 'No subject'}
        
        Message:
        ${message}
        
        ---
        Sent from your portfolio contact form.
        You can reply directly to ${email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">?? New Portfolio Message</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #dcfce7; border-radius: 6px; border: 1px solid #86efac;">
            <p style="margin: 0; color: #166534;">
              ?? <strong>Reply directly to:</strong> ${email}
            </p>
          </div>
          
          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            ---<br>
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully! I'll get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

