import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Box, Stack, Text, Button,Center } from "@chakra-ui/react";

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
    message.success("Thanks For Subscribe")
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          style={{ padding: "25px 50px" }}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
          style={{ padding: "25px 50px" }}
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
            style={{
              padding: "30px 50px",
              textAlign: "center",
              background: "rgb(230, 54, 54)",
              color: "#eee",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Subscribe
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default function NewsLetter() {
  return (
    <>
      <Stack align="center" alignItems="center" justifyContent="center">
        <Box
          bg="#fff"
          w="100%"
          h="40%"
          p={4}
          color="#333"
          boxShadow="10px 10px 10px #ccc"
        >
          <Text as="h3" textAlign="center">
            SUBSCRIBE FOR NEWSLETTER
          </Text>
            <Center>
            <HorizontalLoginForm />
            </Center>
        <br />
        </Box>
      </Stack>
    </>
  );
}
