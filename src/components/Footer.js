import React from "react";

export default function Footer() {
    return (
        <footer id="footer" className="mt-12 border-t border-white/6 pt-8 pb-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <img src="https://www.lib.montana.edu/cats_images/support-for-open-collections/ACM.png" alt="ACM" className="h-12" />
                    <div>
                        <p className="text-sm text-gray-300">ACM Student Chapter — San Diego State University</p>
                        <p className="text-xs text-muted-gray">Questions? <a href="mailto:acm@sdsu.edu" className="text-acm-light-blue underline">acm@sdsu.edu</a></p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/sdsu_acm/" target="_blank" rel="noreferrer" className="text-muted-gray hover:text-acm-light-blue">Instagram</a>
                    <a href="https://discord.gg/UuNuggpKYV" target="_blank" rel="noreferrer" className="text-muted-gray hover:text-acm-light-blue">Discord</a>
                    <a href="/" className="text-muted-gray hover:text-acm-light-blue">Home</a>
                </div>
            </div>
        </footer>
    );
}
