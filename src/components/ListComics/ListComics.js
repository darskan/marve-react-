import "./ListComics.scss"
import { Card, Icon, Image, Dimmer, Loader, Button, CardContent, } from "semantic-ui-react"

export default function Listcomics({listComics, renderComics, setRenderComics}) {

    const {loading, result} = listComics


    if(loading || !result) {
        return (
            <Dimmer active inverted >
                <Loader inverted>
                    Loading...
                </Loader>
            </Dimmer>
        )
    }

    const {results} = result.data
 
    const loadMoreComics = () => {
        const numbreComics = renderComics
        setRenderComics(numbreComics + 5)

    }



    return(
        <Card.Group itemsPerRow={5}>
                {results.map((res, index) => (
                    <Card key={index} className="list-comics">
                        <Image 
                            src={`${res.images[0].path }.${res.images[0].extension}`} 
                            wrapped 
                            ui={false} 
                        />
                        <CardContent>
                            <Card.Header>{res.title}</Card.Header>
                            <Card.Meta>
                                <span>Digital ID:</span>
                            </Card.Meta>
                        </CardContent>
                        <CardContent>
                            <Button
                                animated
                                fluid
                                as="a"
                                href={res.urls[0].url}
                                target="_blank"
                                color="black"
                            >
                                <Button.Content visible>Más información</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="arrow right"/>
                                </Button.Content>
                            </Button>
                        </CardContent>

                    </Card>

                ))}

                <div className="container-button">
                    <Button color="red" onClick={() => loadMoreComics()}>
                        <Icon name="plus"/>Cargar más cómics
                    </Button>

                </div>
        </Card.Group>
    )
}