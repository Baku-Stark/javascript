import { useNavigate } from 'react-router-dom'
import FormItem from 'antd/es/form/FormItem'
import { Row, Col, Form, Input, Button, message } from 'antd'

import { useAuth } from '../../context/AuthProvider/UseAuth'

export function Login(){
    const auth = useAuth()
    const navigate = useNavigate()

    async function onFinish(values: {email: string, password: string}){
        try {
            await auth.authenticate(values.email, values.password)
            navigate('/profile/')
        }
        catch (error) {
            message.error("Invalid email or password")
        }
    }

    return(
        <Row
         justify={'center'}
         align={'middle'}
         style={{
            height: '100vh'
         }}
        >
            <Col span={12}>
                <Form
                    name={"basic"}
                    labelCol={{span: 2}}
                    wrapperCol={{span: 16}}
                    onFinish={onFinish}
                >
                    <FormItem
                        label='Email'
                        name='email'
                    >
                        <Input/>
                    </FormItem>
                    <FormItem
                        label='Password'
                        name='password'
                    >
                        <Input.Password/>
                    </FormItem>
                    <FormItem wrapperCol={{offset: 8, span: 16}}>
                        <Button type='primary' htmlType='submit'>
                            Sign In
                        </Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    )
}