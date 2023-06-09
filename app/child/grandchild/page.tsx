import Link from 'next/link'
import { Fragment } from 'react'

export default function Page() {
  return (
    <Fragment>
      <Link href='/'>Parent</Link>
      <Link href='/child'>Child</Link>
      <Link href='/child/grandchild'>Grandchild</Link>
    </Fragment>
  )
}
