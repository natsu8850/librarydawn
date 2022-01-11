import { useRouter } from "next/router";
import UserSearchComp from "../../../Components/Dashboard/User/Search"
import { searchBookApi } from "../../../utils/booksAPI";


function Search({ searchResults }) {

    const router = useRouter();

    const { title } = router.query;

    return (
        <>
            <UserSearchComp title={title} searchResults={searchResults} />
        </>
    )
}

export default Search

export async function getServerSideProps(context) {

    const contextTitle = context.query.title;

    const searchResults = await searchBookApi(contextTitle);

    return {
        props: {
            searchResults: searchResults || {},

        }
    }
}
