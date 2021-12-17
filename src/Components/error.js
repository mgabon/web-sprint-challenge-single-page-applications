import * as yup from 'yup';

const errorSchema = yup.object().shape({
name: yup
.string()
.trim()
.required('Name is required')
.min(2, "name must be at least 2 characters"),    
size: yup
.string()
.oneOf(['small', 'medium', 'large'], 'Size is required'),
sauce: yup
.string()
.oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Sauce is required'),
substitute: yup
.boolean()
})

export default errorSchema