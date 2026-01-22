import { useState } from 'react';

export default function ContactForm () {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(
            prevState => ({
                ...prevState,
                [name] : value
            })
        );
    }


    return (
        <>
        <form class="form">
            <div class="form-group">
                <label for="name" class="control-label">Name:</label>
                <input
                    class="form-control"
                    id="name" 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    />
            </div>
            <div class="form-group">
                <label for="email" class="control-label">Email:</label>
                <input
                    class="form-control"
                    id="email" 
                    type="text" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    />
            </div>

        </form>
        </>
    )
}