

const Footer = () => {
  return (
    <footer >
            <ul className=" p-2 flex justify-center items-center gap-4 text-gray text-sm">
                <li><a href="https://help.medium.com/hc/en-us" 
                target="_blank" rel="noopener noreferrer">Help</a></li>
                <li><a href="https://medium.statuspage.io/" 
                target="_blank" rel="noopener noreferrer">Status</a></li>
                <li><a href="https://medium.com/about?autoplay=1"
                target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e"
                target="_blank" rel="noopener noreferrer" >Careers</a></li>
                <li><a href="mailto:pressinquiries@medium.com"
                target="_blank" rel="noopener noreferrer">Press</a></li>
                <li><a href="https://blog.medium.com/"
                target="_blank" rel="noopener noreferrer" >Blog</a></li>
                <li><a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
                target="_blank" rel="noopener noreferrer" >Privacy</a></li>
                <li><a href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"
                target="_blank" rel="noopener noreferrer" >Terms</a></li>
                <li><a href="https://speechify.com/medium"
                target="_blank" rel="noopener noreferrer" >Text to speech</a></li>
                <li><a href="https://medium.com/business"
                target="_blank" rel="noopener noreferrer">Teams</a></li>
            </ul>
    </footer>
  )
}

export default Footer