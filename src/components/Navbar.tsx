'use client'
import { motion } from 'motion/react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'


function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const pathName = usePathname()

  const scrolltosection = (id: string) => {
    const element = document.getElementById(id);
    const navbarHeight = 80; // px, adjust to your navbar height

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setOpen(false); // Close the navbar after clicking a link
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const navItems = {
    hidden: { y: -60, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }


  return (
    <nav className='w-full overflow-y-hidden h-20 fixed top-0 z-20 mt-2  flex justify-center items-center '>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring", stiffness: 100,
          damping: 14,
        }}
        className='navContainer'>
        <div className='flex items-center space-x-2 '>
          <Image
            src={'/photos/bcalogo.webp'}
            height={40}
            width={40}
            alt="BCA Logo"
          />
        </div>
        {/* dekstop */}
        <div className='hidden  xl:flex xl:space-x-5 *:text-[1rem] *:cursor-pointer  pr-3'>
          <Button variant='link'>
            <Link href={'/'}>Home</Link>
          </Button>
          {pathName == '/' ? (
            <>
              <Button variant='link' onClick={() => scrolltosection('about')}>About</Button>
              <Button variant='link' onClick={() => scrolltosection('events')}>Events</Button>
              <Button variant='link' onClick={() => scrolltosection('Organizer')}>Organizers</Button></>
          ) : (
            <>
              <Button variant='link' onClick={() => scrolltosection('description')}>Description</Button>
              <Button variant='link' onClick={() => scrolltosection('skills')}>Skills</Button>
              <Button variant='link' onClick={() => scrolltosection('mentors')}>Mentors</Button>
              <Button variant='link' onClick={() => scrolltosection('heads')}>heads</Button>
            </>
          )}
        </div>

        {/* mobile */}
        <div className='xl:hidden'>
          <Sheet open={open} onOpenChange={setOpen} modal={false}>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle> </SheetTitle>
                <SheetDescription>
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='mobileUl'>
                    <motion.li
                      variants={navItems}
                      className='navitem'
                    >
                      <Link href={'/'}>Home</Link>
                    </motion.li>
                    {pathName == '/' ? (
                      <>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('about')}
                        >About</motion.li>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('events')}
                        >Events</motion.li>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('Organizer')}
                        >Organizers</motion.li>
                      </>
                    ) : (
                      <>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('description')}
                        >Description</motion.li>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('skills')}
                        >Skills</motion.li>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('mentors')}
                          >Mentors</motion.li>
                        <motion.li
                          variants={navItems}
                          className='navitem'
                          onClick={() => scrolltosection('heads')}
                          >Heads</motion.li>
                        </>
                    )}
                  </motion.ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
