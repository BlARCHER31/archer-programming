
export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>Feel free to reach out to me at <a href="mailto:blarcher31@gmail.com">blarcher31@gmail.com</a></p>
            <p>Fill out Contact Form below</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
