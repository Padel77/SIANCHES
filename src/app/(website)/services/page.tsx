
import { Background } from "@/components/background/Background";


export default function Page() {


  return (
    <>
      <Background
        imageUrl={"https://s3-alpha-sig.figma.com/img/48bf/0921/6999851aadf02a908928fba17e60d4d4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vn8RLfFkH6H2DACN3~Ko7Iz-4BE4RIojcYSPU4ZqiNdTn2TQHKm049GYJFGO6GeWAQokLlQ-04YwrWKTFnQlBWx6UxM5Cnln1V2lALrglqAfR9Wz-Qcnt0UKG2mgRWiBnDy-7y9Uron~0RjHSiDbuVeZ1lXA9lCSrFQXQrmbaTDvgCDx5X-j40fBkUMdO-zls99-JJa61jxBpNa2TIJJGPuyyadLATQCwPcEhc-3n3y3hLa5jpbpTnopQK2pXRVeuBN4j4z13DqUt~YAqETy8opwPaAZNwokN8eG96wXNRn9sRQnI--ooqwSS~eGmroDL-nE4qVcoSUNCiB8a7Ioxg__"}
        className="flex absolute h-full md:h-screen  items-center text-5xl left-[10%] md:top-[25%]  italic font-bold max-w-xl "
        title={"Our services"}
        showButton={false}
      />
      <div className="p-4 text-xl text-center"> Our services</div>
    </>
  );
}
