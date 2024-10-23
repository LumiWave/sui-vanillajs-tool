import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
// import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
// import { Buffer } from 'buffer';
// import { bech32 } from 'bech32';
// import { bcs } from '@mysten/sui.js/bcs';

// 클라이언트 생성
const client = new SuiClient({ url: getFullnodeUrl('testnet') });
//const client = new SuiClient({ url: "https://sui-testnet.mystenlabs.com/json-rpc" });

export function GetSuiClient() {
    return client;
}

// export async function CreateSignature(transactionBlock, privateKey) {
//     // Bech32 디코딩
// 		//privateKey = suiprivatekey로 시작하는 bech32
//     const decoded = bech32.decode(privateKey);
//     let privateKeyBuffer = Buffer.from(bech32.fromWords(decoded.words));

//     if (privateKeyBuffer.length === 33) {
// 			privateKeyBuffer = privateKeyBuffer.slice(1);
// 		}
// 		// console.log('privateKeyBuffer');
// 		// console.log(privateKeyBuffer.toString('hex'));

//     // Ed25519Keypair 초기화
//     const keypair = Ed25519Keypair.fromSecretKey(privateKeyBuffer);
// 		// console.log('keypair');
// 		// console.log(keypair);		

//     // 서명 생성
//      // BCS 초기화 및 트랜잭션 블록 직렬화

// 		const serializedTransactionBlock = bcs.ser('TransactionBlock', transactionBlock).toBytes();
// 		const message = new Uint8Array(serializedTransactionBlock);


// 		// console.log('message');
// 		// console.log(message);

//     const signature = await keypair.sign(message);
// 		const signatureArray = Array.from(new Uint8Array(signature));
// 		// console.log('signature');
// 		// console.log(signature);
//     // 서명을 Hex 문자열로 변환
//     const signatureHex = Buffer.from(signature).toString('hex');
    
//     return {
// 			transactionBlock: message,
// 			signature: signatureArray
// 		};
// }

// function newIntentMessage(intent, txnBytes) {
// 	// intent는 이미 직렬화된 데이터라고 가정합니다.
// 	const intentBuffer = Buffer.from(intent);

// 	// txnBytes를 직렬화
// 	const serializedTxn = bcs.ser('TransactionBlock', txnBytes).toBytes();
// 	const txnBuffer = Buffer.from(serializedTxn);

// 	// intent와 txnBytes를 결합
// 	const message = Buffer.concat([intentBuffer, txnBuffer]);

// 	return message;
// }