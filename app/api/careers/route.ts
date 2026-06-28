import nodemailer from 'nodemailer'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: Request) {
  try {
    const data = await req.formData()

    const fullName = data.get('fullName') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const position = data.get('position') as string
    const linkedin = data.get('linkedin') as string
    const coverLetter = data.get('coverLetter') as string

    const resume = data.get('resume') as File

    if (!resume) {
      return Response.json(
        { error: 'Resume is required' },
        { status: 400 }
      )
    }

    const bytes = await resume.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = path.join(process.cwd(), 'uploads')

    await fs.mkdir(uploadDir, { recursive: true })

    const filePath = path.join(uploadDir, resume.name)

    await fs.writeFile(filePath, buffer)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aryantrinetra@gmail.com',
      subject: `New Career Application - ${position}`,

      html: `
        <h2>New Career Application</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>

        <h3>Cover Letter</h3>
        <p>${coverLetter}</p>
      `,

      attachments: [
        {
          filename: resume.name,
          path: filePath,
        },
      ],
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)

    return Response.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}