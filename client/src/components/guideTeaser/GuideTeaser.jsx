import { Link } from "react-router-dom";
function GuideTeaser() {
    const guides = [
        {
            title: "How to Choose the Right Cricket Bat",
            image: "https://cdn.khelmart.com/images/blog/cricket-bat-guide.jpg",
            description: "Discover how bat weight, handle type, and willow grade impact your batting.",
            link: "/guides/cricket-bat-guide"
        },
        {
            title: "Badminton Racket Selection Guide",
            image: "https://cdn.khelmart.com/images/blog/badminton-racket-guide.jpg",
            description: "Learn about balance points, shaft flexibility, and racket weight for all levels.",
            link: "/guides/badminton-racket-guide"
        },
        {
            title: "Tennis Racket Buying Tips for Beginners",
            image: "https://cdn.khelmart.com/images/blog/tennis-racket-guide.jpg",
            description: "Understand grip size, string tension, and frame weight to improve your swing.",
            link: "/guides/tennis-racket-guide"
        }
    ];

    return (
        <div className="container my-5">
            <div className="row">
                {guides.map((guide, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={guide.image}
                                className="card-img-top"
                                alt={guide.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title">{guide.title}</h5>
                                    <p className="card-text">{guide.description}</p>
                                </div>
                                <Link to={guide.link} className="btn btn-sm btn-primary mt-2">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GuideTeaser;
