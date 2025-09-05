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


function Navbar() {

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
    <nav className='w-full h-20 fixed top-0 z-20 mt-2 flex justify-center items-center overflow-hidden'>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring", stiffness: 100,
          damping: 14,
        }}
        className='navContainer'>
        <div>
          {/* <img src="" alt="" /> */}
          <h1>Magnum</h1>
        </div>
        {/* dekstop */}
        <div className='hidden xl:flex xl:space-x-10 *:text-[1rem] *:cursor-pointer  pr-3'>
          <Button variant='ghost' onClick={() => scrolltosection('home')}>Home</Button>
          <Button variant='ghost' onClick={() => scrolltosection('about')}>About</Button>
          <Button variant='ghost' onClick={() => scrolltosection('events')}>Events</Button>
        </div>

        {/* mobile */}
        <div className='xl:hidden'>
          <Sheet>
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
                      onClick={() => scrolltosection('home')}
                    >Home</motion.li>
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
                    {/* <motion.li
                      variants={navItems}
                      className='navitem'
                      onClick={() => scrolltosection('contact')}
                    >Contact</motion.li> */}

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
