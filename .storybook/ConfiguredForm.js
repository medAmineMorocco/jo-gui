import React from "react";
import {action} from "@storybook/addon-actions";
import {Button, Form} from "antd";


export function ConfiguredForm({form, children}) {
    return <Form form={form} onFinish={action('finish')}>
        {children}
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
}