import Image from "next/image";
import cocoBanner from "./Images/92coco.png";
import Link from "next/link";
import Features from "./components/Features";
import Carousel from "./components/Caurosel";
import AccountSetup from "./components/AccountSetup";
import TipsAndReferral from "./components/TipsAndReferral";
import Conclusion from "./components/Conclusion";
import FAQs from "./components/Faqs";

export default function Home() {
  const gameInfo = [
    { attribute: "App Name", detail: "92 COCO Game" },
    { attribute: "Size", detail: "23 MB" },
    { attribute: "Version", detail: "Latest" },
    { attribute: "Developer", detail: "92coco.com.pk" },
    { attribute: "Category", detail: "Casino, Cards, Sports" },
    { attribute: "Available", detail: " Web ,Android, iOS" },
  ];

  return (
    <main className="flex flex-col items-center justify-center space-y-5">
      <section className="">
        <div className="relative  text-white text-center py-20">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl text-[#f0c059c5] font-semibold md:text-5xl leading-13">
              <strong className="text-white">92 Coco Game</strong> Real Earning
              Money Download for Android & iOS | 92 coco pk 2025
            </h1>
            <p className="md:text-xl">
              <Link
                href={
                  "https://www.92coco.net/#/register?invitationCode=33847677755"
                }
                className="underline "
              >
                92 Coco
              </Link>{" "}
              is Pakistan premier online gaming app, offering real money
              rewards. Enjoy casino classics like slots and card games with a
              user-friendly interface. Earn real cash through gameplay,
              referrals, and daily bonuses. Designed for both beginners and
              seasoned players seeking fun and profit. Experience smooth
              performance on Android and iOS devices. No intrusive ads—just
              seamless, engaging entertainment. Join a growing community of
              players earning while they play. Download 92 Coco Game today and
              start your rewarding gaming journey!
            </p>
            <Link href="https://www.92coco.net/#/register?invitationCode=33847677755">
              <button className="text-[#f0c059] border  rounded-lg py-2 px-3 hover:text-[#f0c059c5] mt-5 md:text-2xl flex items-center justify-center gap-2 cursor-pointer hover:bg-[#4444]">
                Download
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center px-4">
          <Image src={cocoBanner} alt="coco game banner" width={800} />
        </div>
        <div className="text-[#f0c059] flex flex-col items-center justify-center w-full mt-6">
          <h2 id="game-info-heading" className="text-4xl font-semibold mb-4">
            92 COCO Details
          </h2>
          <div className="overflow-x-auto ">
            <table className="min-w-auto md:min-w-3xl border border-gray-300 text-center">
              <thead className="text-center">
                <tr className="bg-[#020d0f] py-3 text-center">
                  <th className="px-4 py-2 border-b">Attribute</th>
                  <th className="px-4 py-2 border-b">Details</th>
                </tr>
              </thead>
              <tbody>
                {gameInfo.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="px-4 py-2 border-b">{item.attribute}</td>
                    <td className="px-4 py-2 border-b">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-[#f0c059] flex flex-col items-center justify-center text-center mt-6 space-y-4 max-w-3xl">
          <h2 className="text-4xl font-semibold mb-4">
            What Is 92 COCO Game?{" "}
          </h2>
          <p className="md:text-xl text-white">
            ​92 Coco is a dynamic online gaming platform tailored for Pakistani
            users, seamlessly blending entertainment with real earning
            opportunities. Offering a diverse array of games including slots,
            lotteries, and sports betting it caters to both casual players and
            seasoned gamers. The platform emphasizes user-friendly design,
            ensuring accessibility across Android, iOS, and web browsers. With
            secure payment integrations like{" "}
            <Link
              className="underline text-cyan-500"
              href={"http://jazzcash.com.pk/"}
            >
              {" "}
              JazzCash
            </Link>{" "}
            and{" "}
            <Link
              className="underline text-cyan-500"
              href={"https://easypaisa.com.pk/"}
            >
              Easypaisa
            </Link>{" "}
            , players can effortlessly manage their earnings. Whether youre
            seeking quick fun or aiming to monetize your gaming skills, 92Coco
            provides a reliable and engaging environment to play and earn.
          </p>
        </div>
      </section>
      <Features />
      <Carousel />
      <AccountSetup />
      <TipsAndReferral />
      <Conclusion />
      <FAQs />
    </main>
  );
}
