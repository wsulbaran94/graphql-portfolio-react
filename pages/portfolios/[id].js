import { useRouter } from "next/router";


const PortfolioDetail = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <h1>Im detail page with id: {id}</h1>
    );
}

export default PortfolioDetail;