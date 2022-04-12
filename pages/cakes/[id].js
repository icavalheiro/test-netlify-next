import { useRouter } from 'next/router';

export default function CakeDetail () {
    const router = useRouter();
    return <p>{ router.query.id }</p>;
}