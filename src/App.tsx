// import "./App.css";
import { Button, Checkbox, Form, Input, Image, Typography } from "antd";

function App() {
  // const [count, setCount] = useState(0)
  const { Text, Title, Link } = Typography;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    // remember?: string;
  };
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        // labelCol={{ span: 2,color:'green' }}
        // wrapperCol={{ span: 16 }}
        style={{
          width: "50vw",
          display: "grid",
          placeItems: "center",
          border: "3px solid cyan",
          borderRadius: "15px",
          padding: "30px",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Image
          width={100}
          style={{ borderRadius: "100%", marginBottom: "0rem" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <h1>CitizenVoice</h1>
        <p>Your Feedback, Their Action.</p>
        <h2 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Administration Login
        </h2>

        <p
          style={{
            marginRight: "auto",
            marginBottom: ".2rem",
            fontWeight: "bold",
          }}
        >
          Username
        </p>
        <Form.Item<FieldType>
          style={{ width: "100%" }}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            style={{
              borderRadius: "100px",
              border: "2px solid cyan",
              color: "cyan",
            }}
            placeholder="abc@example.com"
          />
        </Form.Item>

        <p
          style={{
            marginRight: "auto",
            marginBottom: ".2rem",
            fontWeight: "bold",
          }}
        >
          Username
        </p>

        <Form.Item<FieldType>
          style={{ width: "100%", color: "cyan" }}
          name="password"
          rules={[
            { required: true, min: 8, message: "Please input your password!" },
          ]}
        >
          <Input.Password
            style={{
              borderRadius: "100px",
              border: "2px solid cyan",
              color: "cyan",
            }}
            placeholder="min 8 characters"
          />
        </Form.Item>

        <Link
          style={{ marginLeft: "auto" }}
          href="https://ant.design"
          target="_blank"
        >
          Forgot Password?
        </Link>

        <Form.Item style={{ width: "100%" }}>
          <Button
            style={{
              backgroundColor: "cyan",
              color: "white",
              fontWeight: "bold",
              width: "100%",
              borderRadius: "100px",
            }}
            htmlType="submit"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
