/* eslint-disable spaced-comment */
/// <reference types="react-scripts"/>
import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json";
import dapp from "../dapp.png"; 
import dai from "../dai.png";
import eth from "../eth.png";
import { YourWallet } from "./yourWallet";

export type Token = {
    image: string
    address: string
    name: string
}

export const Main = () => {
    // Show token values from the wallet
    // Get the address of different tokens
    // Get the balance of the users wallet

    // send the brownie-config to our `src` folder
    // send the build folder 
    const { chainId, error } = useEthers();
    const networkName = chainId ? helperConfig[chainId] : "dev";
    let stringChainId = String(chainId);
    const dappTokenAddress = chainId ? networkMapping[stringChainId]["DappToken"][0] : constants.AddressZero;
    const wethTokenAddress = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero;
    const fauTokenAddress = chainId ? brownieConfig["networks"][networkName]["fau_token"] : constants.AddressZero;

    const supportedTokens: Array<Token> = [
        {
            image: dapp,
            address: dappTokenAddress,
            name: "DAPP"
        },
        {
            image: dai,
            address: fauTokenAddress,
            name: "DAI",
        }, 
        {
            image: eth,
            address: wethTokenAddress,
            name: "WETH"
        }
    ]

    return (<YourWallet supportedTokens={supportedTokens} />)
}