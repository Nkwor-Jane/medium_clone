

const Footer = () => {
  return (
    <footer >
            <ul className=" p-2 text-gray text-sm grid grid-cols-3 gap-3 place-content-center place-items-center md:flex md:items-center md:justify-center ">
                <li className="hover:underline"><a href="https://help.medium.com/hc/en-us" 
                target="_blank" rel="noopener noreferrer">Help</a></li>
                <li className="hover:underline"><a href="https://medium.statuspage.io/" 
                target="_blank" rel="noopener noreferrer">Status</a></li>
                <li className="hover:underline"><a href="https://medium.com/about?autoplay=1"
                target="_blank" rel="noopener noreferrer">About</a></li>
                <li className="hover:underline"><a href="https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e"
                target="_blank" rel="noopener noreferrer" >Careers</a></li>
                <li className="hover:underline"><a href="mailto:pressinquiries@medium.com"
                target="_blank" rel="noopener noreferrer">Press</a></li>
                <li className="hover:underline"><a href="https://blog.medium.com/"
                target="_blank" rel="noopener noreferrer" >Blog</a></li>
                <li className="hover:underline"><a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
                target="_blank" rel="noopener noreferrer" >Privacy</a></li>
                <li className="hover:underline"><a href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"
                target="_blank" rel="noopener noreferrer" >Terms</a></li>
                <li className="hover:underline"><a href="https://speechify.com/medium"
                target="_blank" rel="noopener noreferrer" >Text to speech</a></li>
                <li className="hover:underline"><a href="https://medium.com/business"
                target="_blank" rel="noopener noreferrer">Teams</a></li>
            </ul>
    </footer>
  )
}

export default Footer