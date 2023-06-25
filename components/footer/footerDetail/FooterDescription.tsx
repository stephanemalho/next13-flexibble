import Image from 'next/image'

const FooterDescription = () => {
  return (
    <div className="flex items-start flex-col">
      <Image src="./logo-purple.svg" width={115} height={38} alt="Flexibble" />
      <p className="text-start text-sm font-normal mt-5 max-w-xs">
        Flexibble is a community of developers, designers and webmasters who share, grow and learn together.
      </p>
    </div>
  )
}

export default FooterDescription