"use client"

import { ThirdwebProvider } from "../components/ThirdwebProvider";
import {
  ConnectWallet,
  metamaskWallet,
  darkTheme,
} from "@thirdweb-dev/react";
import HeroSection from "../components/HeroSection";



const activeChain = "ethereum";

export default function Home() {
  return (
    <ThirdwebProvider
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    activeChain={activeChain}
    supportedWallets={[metamaskWallet()]}
    >
     <main className="h-screen bg-[#121212]">
      <HeroSection />
      <div className="flex items-center justify-center text-center">
        <div>
        <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonBg: "#ff4d00",
            accentText: "#ff4d00",
            modalBg: "#070708",
            primaryButtonBg: "#d54407",
            primaryButtonText: "#f2f2f2",},})}
        modalSize={"compact"}
        btnTitle={"Simple Wallet Connect Button"}
        showThirdwebBranding={false}
      />
      </div>
      </div>
      <div className="text-[#ADB7BE] text:text-lg lg:text-lg pt-8 pl-8 pr-2 lg:ml-24 lg:pl-40 lg:pt-28 flex lg:items-center lg:justify-start lg:text-start  ">
        <ul className="list-none text-white font-sans ">
          <li className="py-2">🟠Onboarding aller Benutzer mit einem ansprechenden Connect Wallet-Modal </li>
          <li className="py-2">🟠Flexible Anmeldeoptionen für Web2 & Web3</li>
          <li className="py-2">🟠Erweiterbare Möglichkeiten, um jeden mit einer E-Mail oder einem Google-Konto an Bord zu holen - mit 1-Klick-Login-Flows, flexiblen Authentifizierungsoptionen und sicherer Kontowiederherstellung</li>
          <li className="py-2">🟠Beliebte Wallets wie MetaMask, WalletConnect, Coinbase, ++ vorhanden</li>
          <li className="py-2">🟠Derzeit ist das Modal ausschließlich in englischer Sprache verfügbar. Eine Erweiterung auf Deutsch ist möglicherweise in Zukunft möglich, hängt jedoch vom Anbieter thirdweb ab</li>
        </ul>
      </div>
    </main>
    </ThirdwebProvider>
  )
}


