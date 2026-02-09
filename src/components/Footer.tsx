
const Footer = () =>{
    return(
        <footer className="w-full text-muted-foreground px-16 py-8 bg-gray-100 dark:bg-black">
            <div className="flex place-content-between mb-3">
                <b>Cristian C.</b>
                <div className="">
                    <a href="#" className="hover:underline pr-4">Back to Top</a>
                    <a href="#about" className="hover:underline pr-4">About</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </div>
            <div className="flex justify-center">
                ©️ All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;