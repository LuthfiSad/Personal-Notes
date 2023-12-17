import React from "react";
import gambar1 from "../../../public/images/aboutus/gambar1.svg";
import gambar2 from "../../../public/images/aboutus/gambar2.svg";
import gambar3 from "../../../public/images/aboutus/gambar3.svg";
import gambar4 from "../../../public/images/aboutus/gambar4.svg";
import gambar5 from "../../../public/images/aboutus/gambar5.svg";
import gambar6 from "../../../public/images/aboutus/gambar6.svg";
import gambar7 from "../../../public/images/aboutus/gambar7.svg";

function AboutUs() {
    const h1Style = {
        background: "linear-gradient(#818CF8, #080B2A 70%)",
        backgroundClip: "text",
        WebkitTextStrokeColor: "transparent",
        WebkitTextStrokeWidth: "calc(1em / 40)",
        WebkitBackgroundClip: "text",
        color: "#080B2A",
        textTransform: "uppercase",
    };

    const thirdText = {
        lineWeight: "3.625rem",
    };

    return (
        <section className=" bg-[#0A0D2A] py-20 overflow-hidden">
            <div className=" about flex justify-center -m-14">
                <div className="md:-mb-4 mb-9 -mt-5 font-Monument font-black bg-[#0A0D2A] box-border grid place-items-center">
                    <h1 style={h1Style} className="md:text-[12rem] text-[6rem] md:tracking-wide tracking-normal"
                    >about</h1>
                </div>
            </div>

            <div className="flex mb-5 justify-center text-white font-black text-center shadow-lg text-4xl md:text-6xl">
                <h3 className="text font-Epilouge self-stretch">
                    UMN Tech Festival
                </h3>
            </div>
            <div className=" flex -mt-2 justify-center font-Epilouge font-black text-[#818CF8] text-2xl md:text-5xl">
                <h2 className="text-center px-20">Unleashing Tech Through Colaboration</h2>
            </div>

            <div className=" flex flex-col md:flex-row justify-center">
                <div className="ml-8 md:-ml-40 md:mr-36 mt-40 md:mt-60 w-72 md:w-4/12 md:px-6 md:h-72 flex-col justify-center items-start gap-6 inline-flex">
                    <div className="SectionText self-stretch md:h-72 flex-col justify-start items-start gap-8 flex">
                        <div className="Top self-stretch h-32 flex-col justify-start items-start gap-2 flex">
                            <div className="MainHeadline self-stretch text-neutral-100 text-5xl font-black font-Epilogue leading-10">
                                Collaborate
                            </div>
                            <div className="SecondaryHeadline self-stretch text-indigo-400 text-5xl font-black font-Epilouge leading-10">
                                Insights.
                            </div>
                        </div>
                        <div className="Paragraph self-stretch text-slate-300 md:text-lg font-Epilogue leading-relaxed">
                            UMN Tech Festival (UTF), sebuah event teknologi yang
                            merayakan kolaborasi di antara individu, perusahaan,
                            dan komunitas di bidang teknologi. Berbagai insight
                            baru tentang dunia teknologi akan Anda dapatkan baik
                            melalui workshop, pameran teknologi, maupun lomba
                            Hackathon yang bisa diikuti.
                        </div>
                    </div>
                </div>

                <div className="scale-[0.74] md:scale-100 mt-10 items-center md:ml-20 md:mt-40 md:-mr-24 md:pt-8 md:pr-20 w-96 h-96 flex-col justify-center items-end gap-1 inline-flex">
                    <div className="ml-11 w-max h-max flex-col justify-center items-end gap-6 inline-flex">
                        <div className="self-stretch w-max h-max pl-12 justify-start items-start gap-6 inline-flex">
                            <img
                                className="mt-8 -mr-6 w-full h-ful basis-0 self-stretch rounded-2xl shadow"
                                src={gambar1}
                            />
                            <img
                                className="basis-0 self-stretch rounded-2xl"
                                src={gambar2}
                            />
                        </div>
                        <div className="-mt-12 self-stretch w-full pr-6 justify-start items-start gap-6 inline-flex">
                            <img
                                className="-mr-8 basis-0 self-stretch rounded-2xl shadow"
                                src={gambar3}
                            />
                            <img
                                className="-mt-6 w-full self-stretch rounded-2xl"
                                src={gambar4}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-2 mt-10 pt-60 flex flex-col md:flex-row justify-between">
                <div className="scale-[0.69] md:scale-100 -ml-20 md:ml-72 -mt-40 w-fit h-fit flex-col justify-center items-start inline-flex">
                    <div className="w-full h-full flex-col items-start inline-flex">
                        <img
                            className="gambar5 w-screen md:w-[64vh] rounded-3xl shadow"
                            src={gambar5}
                        />
                        <div className=" self-stretch -mt-10 gap-6 inline-flex">
                            <img
                                className="w-20 md:w-80 md:w-80 basis-0 self-stretch rounded-2xl shadow"
                                src={gambar6}
                            />
                            <img
                                className="w-20 md:w-80 -mt-6 -ml-6 basis-0 self-stretch rounded-2xl"
                                src={gambar7}
                            />
                        </div>
                    </div>
                </div>

                <div className="ml-8 w-72 md:mr-72 md:w-4/12 md:px-6 md:h-72 flex-col justify-center items-start gap-6 inline-flex">
                    <div className="SectionText self-stretch md:h-96 flex-col justify-start items-start gap-8 flex">
                        <div className="Top self-stretch h-32 flex-col justify-start items-start gap-2 flex">
                            <div className="MainHeadline self-stretch text-neutral-100 text-5xl font-bold font-Epilogue leading-10">
                                Technological
                            </div>
                            <div className="SecondaryHeadline self-stretch text-indigo-400 text-5xl font-bold font-Epilogue leading-10">
                                Innovations.
                            </div>
                        </div>
                        <div className="Paragraph self-stretch text-slate-300 md:text-lg font-normal font-Epilogue leading-relaxed">
                            UMN Tech Festival (UTF) adalah sebuah event
                            teknologi yang mengeksplorasi dampak inovasi
                            teknologi dalam berbagai aspek kehidupan kita. Acara
                            ini memiliki tagline "Unleashing Tech Through
                            Collaboration" yang menekankan pentingnya kolaborasi
                            dalam mengoptimalkan potensi teknologi. UTF
                            mempunyai tiga acara utama yaitu Exhibition,
                            Workshop dan Hackathon. kalian berkesempatan untuk
                            mendapatkan Inovasi teknologi yang sangatlah tak
                            terbatas, mendapatkan banyak wawasan sebagai
                            pendidikan, bertukar ide antar peserta, lembaga,
                            maupun perusahaan, serta sebagai hiburan. Dengan
                            demikian, UTF bukan hanya sebuah festival teknologi
                            biasa, tetapi juga merupakan perayaan semangat
                            kolaborasi dan inklusi dalam menghadapi era
                            teknologi yang terus berkembang. Ini adalah wadah
                            untuk merangkul inovasi, pendidikan, dan hiburan
                            dalam konteks teknologi modern.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;