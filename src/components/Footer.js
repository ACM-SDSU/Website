import React from "react";

export default function Footer(){
    return (
        <section id="footer" class="bg-white text-gray-200 p-4 mb-0">
            <div class="flex flex-row space-x-12 pb-20 justify-center " style={{height: 120+"px"}}>
                <div class="p-4 w-1/5">
                    <img src="https://www.lib.montana.edu/cats_images/support-for-open-collections/ACM.png" />
                </div>
                <div class="p-4 w-1/5">
                    <img src="https://brand.sdsu.edu/_images/_logo-section/downloads/1000-horizontal-full-color.jpg" />
                </div>
            </div>
        </section>
    );
}
