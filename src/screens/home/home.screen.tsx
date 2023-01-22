import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NothingHere } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { NFTCardList } from "../../components/organ/organ.nft-list/nft-list.organ";
import { BackdropContext } from "../../contexts";
import { listNFTsQuery } from "../../graphql/queries/nft-list.query.graphql";
import { toastMessage } from "../../system/utils";
import { nftDataList } from "./home.repository";

const Home = () => {
  const { data, error, loading, client } = useQuery(listNFTsQuery());
  const { setVisible, visible } = useContext(BackdropContext);
  useEffect(() => {
    setVisible(loading);
  }, [data]);

  if (error && visible) {
    setTimeout(() => {
      toastMessage({ message: error?.message });
      setVisible(false);
    }, 1200);
    return (<NothingHere hideButton title='Ops! Nenhum NFT encontrado' />);
  }

  if (loading) {
    return (<></>);
  }

  const nfts = nftDataList(data?.listNFTs);

  return (
    !nfts?.length
      ? <NothingHere hideButton title='Ops! Nenhum NFT encontrado' />
      : <SafeAreaView>
          <Container hasPadding hasBorder>
            <NFTCardList
              cardsData={nfts || []}
            />
          </Container>
        </SafeAreaView>
  );
};

export default React.memo(Home);
