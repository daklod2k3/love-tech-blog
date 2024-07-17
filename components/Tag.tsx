import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
  disabled?: boolean
}

const Tag = ({ text, disabled }: Props) => {
  if (disabled)
    return (
      <span className="mr-3 text-sm font-medium uppercase text-primary-500 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </span>
    )
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
