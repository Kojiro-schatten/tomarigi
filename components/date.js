import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  // LLLL = month, d = day, yyyy = year
  return <time dateTime={dateString}>{format(date , 'LLLL d, yyyy')}</time>
}