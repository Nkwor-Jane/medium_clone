import MediumLogo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-20">
            <div>
                <a
                    href="https://medium.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                <img src={MediumLogo} className="h-14" alt="Medium Logo"/>
                </a>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li className="hover:underline">
                        <a
                        href="https://medium.com/about?autoplay=1"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            Our story
                        </a>
                    </li>
                    <li className="hover:underline">
                        <a
                            href="https://medium.com/membership"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        Membership
                        </a>
                    </li>
                    <li className="hover:underline">
                        <a
                            href="https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fnew-story"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        Write
                        </a>
                    </li>
                    <li className="hover:underline">
                        <a
                             href="https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        Sign in
                        </a>
                    </li>
                    <li>
                        <button className="p-2 rounded-3xl bg-black text-white text-xs hover:bg-slate-900">
                            <a
                            href="https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2F"
                            rel="noopener noreferrer"
                            target="_blank"
                            >
                            Get started
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
            
    </header>
  )
}

export default Header