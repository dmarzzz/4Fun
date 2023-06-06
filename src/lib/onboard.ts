import { init } from "@web3-onboard/react"
import injectedModule from "@web3-onboard/injected-wallets"

const INFURA_KEY = ""

const injected = injectedModule()

const wallets = [injected]

const chains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
]

const appMetadata = {
  name: "dmarz",
  icon: `<svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_817_359)">
<rect x="33" y="29" width="182" height="182" rx="6" fill="url(#paint0_linear_817_359)"/>
</g>
<rect x="172" y="55" width="20" height="128" fill="#070707"/>
<rect x="55" y="56" width="20" height="128" fill="#070707"/>
<rect x="124" y="70.7782" width="69" height="69" transform="rotate(45 124 70.7782)" stroke="#070707" stroke-width="11"/>
<path d="M164 119.445C164 119.445 146.091 136.891 124 136.891C101.909 136.891 84 119.445 84 119.445C84 119.445 101.909 102 124 102C146.091 102 164 119.445 164 119.445Z" fill="#070707"/>
<circle cx="124" cy="119.453" r="16" fill="#180345"/>
<circle cx="124" cy="119.453" r="16" fill="url(#paint1_angular_817_359)"/>
<path d="M130.136 126.709C130.392 124.024 130.349 121.5 130.302 120.256L127.404 125.272L127.408 125.278C127.407 125.279 127.403 125.282 127.395 125.287L127.385 125.304H127.369C127.012 125.54 124.253 127.344 120.985 128.837C118.931 129.775 117.078 130.41 115.478 130.724C114.445 130.926 113.513 130.994 112.69 130.929C115.6 133.791 119.594 135.557 124 135.557C125.21 135.557 126.389 135.423 127.524 135.171C128.12 134.467 128.628 133.507 129.042 132.3C129.558 130.797 129.926 128.916 130.136 126.709Z" fill="white"/>
<path d="M120.615 113.587H120.631C120.988 113.351 123.747 111.546 127.015 110.054C129.069 109.115 130.922 108.481 132.522 108.167C133.555 107.965 134.487 107.897 135.31 107.962C132.4 105.1 128.406 103.334 124 103.334C122.79 103.334 121.611 103.467 120.476 103.72C119.88 104.423 119.372 105.383 118.958 106.59C118.442 108.094 118.074 109.975 117.864 112.182C117.608 114.867 117.651 117.39 117.698 118.635L120.596 113.619L120.592 113.613C120.593 113.612 120.597 113.609 120.605 113.604L120.615 113.587Z" fill="white"/>
<path d="M132.621 108.655C131.06 108.96 129.245 109.582 127.227 110.504C124.772 111.625 122.607 112.924 121.551 113.587H127.348L127.351 113.58C127.353 113.58 127.357 113.583 127.365 113.587H127.385L127.393 113.601C127.777 113.791 130.72 115.277 133.647 117.358C135.488 118.667 136.965 119.953 138.036 121.18C138.73 121.975 139.256 122.749 139.611 123.496C139.946 122.202 140.125 120.844 140.125 119.445C140.125 115.235 138.509 111.403 135.863 108.533C134.956 108.37 133.871 108.41 132.621 108.655Z" fill="white"/>
<path d="M137.663 121.51C136.618 120.312 135.171 119.053 133.364 117.767C131.165 116.203 128.956 114.979 127.854 114.397L130.752 119.413L130.76 119.413C130.76 119.414 130.76 119.419 130.761 119.428L130.77 119.445L130.762 119.459C130.789 119.886 130.973 123.176 130.633 126.75C130.419 128.996 130.043 130.917 129.514 132.458C129.172 133.456 128.764 134.298 128.294 134.979C133.572 133.525 137.765 129.459 139.392 124.26C139.081 123.392 138.503 122.472 137.663 121.51Z" fill="white"/>
<path d="M115.379 130.236C116.94 129.93 118.755 129.308 120.773 128.387C123.228 127.266 125.393 125.967 126.449 125.304H120.652L120.649 125.311C120.647 125.31 120.643 125.308 120.635 125.304H120.615L120.607 125.29C120.224 125.099 117.28 123.614 114.353 121.532C112.512 120.224 111.035 118.938 109.964 117.71C109.27 116.915 108.744 116.142 108.389 115.395C108.054 116.689 107.875 118.046 107.875 119.445C107.875 123.655 109.491 127.488 112.137 130.358C113.044 130.521 114.129 130.481 115.379 130.236Z" fill="white"/>
<path d="M110.337 117.381C111.382 118.579 112.829 119.838 114.636 121.123C116.835 122.687 119.044 123.912 120.146 124.493L117.248 119.477L117.24 119.478C117.24 119.477 117.24 119.472 117.239 119.463L117.23 119.445L117.237 119.431C117.211 119.005 117.027 115.715 117.367 112.141C117.581 109.894 117.957 107.973 118.486 106.432C118.828 105.434 119.236 104.593 119.706 103.912C114.428 105.365 110.235 109.431 108.608 114.63C108.919 115.498 109.497 116.419 110.337 117.381Z" fill="white"/>
<defs>
<filter id="filter0_d_817_359" x="0" y="0" width="248" height="248" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="16.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.0431373 0 0 0 0 0.321569 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_817_359"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_817_359" result="shape"/>
</filter>
<linearGradient id="paint0_linear_817_359" x1="231.38" y1="78.14" x2="73.04" y2="195.53" gradientUnits="userSpaceOnUse">
<stop stop-color="#0AFE97"/>
<stop offset="1" stop-color="#EA0070"/>
</linearGradient>
<radialGradient id="paint1_angular_817_359" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(124 119.268) rotate(-101.31) scale(21.1055)">
<stop offset="0.0364583" stop-color="#B1FF0C"/>
<stop offset="0.40625" stop-color="#0AFE97"/>
<stop offset="0.625" stop-color="#D72694"/>
</radialGradient>
</defs>
</svg>


`,
  description: "Example showcasing how to connect a wallet.",
  //   recommendedInjectedWallets: [
  //     { name: "MetaMask", url: "https://metamask.io" },
  //     { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  //   ],
}

export const web3Onboard = init({
  wallets,
  chains,
  appMetadata,
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
  connect: {
    autoConnectLastWallet: true
  }
})
