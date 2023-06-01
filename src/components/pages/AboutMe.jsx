import Footer from "../Footer.jsx"
import "../../styles/AboutMe.css"
import myPhoto from "../../assets/portfolio-small.png";

export default function AboutMe() {

    return (
        <div className={"container"}>
            <div className={'row d-flex flex-column'}>
                <div className={"row d-flex flex-column col-sm-5 col-md-4 col-lg-3 col-xl-2 aboutMeSection"}>
                    <div className={' gy-4 fs-2'}>
                        About Me
                    </div>
                    <div className={'gy-4'}>
                        <img className={"img-fluid rounded-circle myImg"} src={myPhoto} alt={"photo of the developer"}/>
                    </div>
                </div>
                <div className={'col-12 gy-4 bg-light rounded bg-opacity-50'}>
                    <p>
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum.
                    </p>
                    <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                </div>
                < Footer />
            </div>
        </div>

    )
}