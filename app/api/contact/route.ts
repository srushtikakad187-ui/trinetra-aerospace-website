import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const { name, email, company, phone, message } = data

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      // Mail will be received here
      to: 'aryantrinetra@gmail.com',

      subject: `New Contact Inquiry from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Inquiry</h2>

          <p><strong>Full Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Company:</strong> ${company}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <h3>Message</h3>

          <p>${message}</p>
        </div>
      `,
    })

    return Response.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        error: 'Failed to send message',
      },
      {
        status: 500,
      }
    )
  }
}