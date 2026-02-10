
const Footer = () =>{
    return(
        <footer className="w-full text-muted-foreground px-16 py-8 bg-gray-100 dark:bg-black">
            <div className="flex place-content-between mb-3 flex-col sm:flex-row">
                <b>Cristian C.</b>
                <div className="flex align-middle">
                    <a href="#" className="hover:underline pr-4">Back to Top</a>
                    <a href="#about" className="hover:underline pr-4">About</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </div>
            <div className="flex justify-center mt-8 border-t-2 border-border pt-8">
                ©️ All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;