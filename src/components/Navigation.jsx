/* eslint-disable no-unused-vars */
import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
}, {
  label: 'Post',
  route: '/post'
}]

export default function Navigation () {
  return (
    <header>
      <nav>
        <ul className='flex justify-around border-4 rounded-md m-3'>
          {links.map(({ label, route }) => (
            <li key={route} className='text-4xl'>
              <Link href={route} className='text-2xl'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
