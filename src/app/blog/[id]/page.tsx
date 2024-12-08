import { notFound } from 'next/navigation'
import Image from 'next/image'

async function getBlogPost(id: string) {
  const res = await fetch(`https://api.360xpertsolutions.com/api/blogs/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch blog post')
  }
  return res.json()
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  let post
  try {
    const data = await getBlogPost(params.id)
    post = data.data
  } catch (error) {
    notFound()
  }

  if (!post) {
    notFound()
  }

  const { title, author, publicationDate, content } = post.attributes

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">{title}</h1>
      <div className="mb-6 text-gray-600">
        <p className='dark:text-white'>By {author}</p>
        <p className='dark:text-white'>{new Date(publicationDate).toLocaleDateString()}</p>
      </div>
      {content.map((block: any, index: number) => {
        switch (block.type) {
          case 'heading':
            const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements
            return <HeadingTag key={index} className="text-2xl font-bold my-4 dark:text-white">{block.children[0].text}</HeadingTag>
          case 'paragraph':
            return <p key={index} className="my-4 dark:text-white">{block.children[0].text}</p>
          case 'image':
            return (
              <div key={index} className="my-4 dark:text-white">
                <Image
                  src={block.image.url}
                  alt={block.image.alternativeText || ''}
                  width={block.image.width}
                  height={block.image.height}
                  layout="responsive"
                />
              </div>
            )
          default:
            return null
        }
      })}
    </article>
  )
}

