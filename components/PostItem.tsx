import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { allAuthors, Blog } from 'contentlayer/generated'
import { Calendar, CalendarDays, Dot } from 'lucide-react'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import React, { ReactNode } from 'react'

interface props {
  post: CoreContent<Blog>
}

export default function PostItem({ post }: props) {
  const { slug, date, title, summary, tags, authors } = post
  const authorsDetail = (authors || ['default']).map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return authorResults?.name
  })

  return (
    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
      <article className="rounded bg-accent p-5 shadow transition-all duration-300 hover:translate-x-3 active:scale-90">
        <div className="space-y-2 xl:grid xl:items-baseline xl:space-y-0">
          <div className="space-y-3">
            <div className="space-y-2">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag disabled key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
            </div>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>
                  {[formatDate(date, siteMetadata.locale), ...authorsDetail]
                    .filter((item) => item)
                    .map((item, idx) => {
                      return (
                        <>
                          {idx > 0 ? <Dot className="inline" /> : null}
                          {item}
                        </>
                      )
                    })}
                </time>
              </dd>
            </dl>
            {/* <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div> */}
          </div>
        </div>
      </article>
    </Link>
  )
}
