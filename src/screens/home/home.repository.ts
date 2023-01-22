import { Maybe, NftData } from "../../graphql/types"
import { NFTData } from "../../system/interfaces/common.interfaces"
import { generateFakeCategory } from "../../system/utils/generate-fake-categories.utils";

export const nftDataList = (nftList: Maybe<Array<Maybe<NftData>>>): NFTData[] => {
  if (!nftList || !nftList?.length) {
    return [] as NFTData[];
  }
  let nfts = nftList.map((nft) => {
    const category = generateFakeCategory();
    return {
      ...nft,
      category
    };
  });

  return nfts as NFTData[];
}