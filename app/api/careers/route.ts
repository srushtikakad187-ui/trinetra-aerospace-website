import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.formData()

    const fullName = data.get('fullName') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const position = data.get('position') as string
    const linkedin = data.get('linkedin') as string
    const coverLetter = data.get('coverLetter') as string

    const resume = data.get('resume')

console.log('Resume:', resume)

if (resume instanceof File) {
  console.log('Resume name:', resume.name)
  console.log('Resume size:', resume.size)
  console.log('Resume type:', resume.type)
}
let attachments: {
  filename: string
  content: Buffer
  contentType: string
}[] = []

if (resume instanceof File && resume.size > 0) {
  console.log('File received:', resume.name)
  console.log('File type:', resume.type)

  const bytes = await resume.arrayBuffer()

  attachments = [
    {
      filename: resume.name || 'resume.pdf',
      content: Buffer.from(bytes),
      contentType: resume.type || 'application/pdf',
    },
  ]
}

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
    console.log('Sending email...')
console.log('Attachments count:', attachments.length)

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

      attachments: attachments,
    })

    return Response.json({ success: true })
  } catch (error) {
  console.error('CAREER FORM ERROR:', error)

  return Response.json(
    {
      success: false,
      error: String(error),
    },
    { status: 500 }
  )
}
}