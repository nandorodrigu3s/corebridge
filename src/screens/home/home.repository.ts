import { Maybe, NftData } from "../../graphql/types"
import { NFTData } from "../../system/interfaces/common.interfaces"

export const nftDataList = (nftList: Maybe<Array<Maybe<NftData>>>): NFTData[] => {
  if (!nftList || !nftList?.length) {
    return [] as NFTData[];
  }
  let nfts = nftList.map((nft) => {
    return nft;
  });

  return nfts as NFTData[];
}