import Image from 'next/image';
import { styled } from '@emotion/styled';

export default function Picture(props) {
    return (
        <Image src={props.src} alt="backgroundImage"/>
    )
}
