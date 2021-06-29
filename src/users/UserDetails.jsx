import { useRecoilValue } from "recoil";
import { getUserByID } from "./selectors";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

const UserDetails = (props) => {
  const {
    match: {
      params: { userId },
    },
  } = props;

  const selectedUser = useRecoilValue(getUserByID(userId));
  const { avatar, email, first_name, last_name } = selectedUser;

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={{ offset: 2, size: 6 }} sm={{ offset: 4, size: 4 }}>
          <Card>
            <CardImg top src={avatar} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{`${first_name} ${last_name}`}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {email}
              </CardSubtitle>
              <CardText>Description in progress ...</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
