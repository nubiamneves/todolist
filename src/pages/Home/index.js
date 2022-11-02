import { CreateTask } from "../../components/CreateTask";
import {postArray} from "../../utils/posts";
import { Container, Content } from "./styled";

export function Home() {

    return(
        <Container>
            <h1>TO DO LIST</h1>

            <Content>
                {postArray.map(post => {
                    return(
                        <CreateTask key={post.id} info={post}/>
                    )
                })}
            </Content>

        </Container>
    );
}