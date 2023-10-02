import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  GetCpeEventByIdQuery,
  useGetCpeEventByIdLazyQuery,
} from "../gql/graphql";

const EventRegistration = () => {
  const { params } = useRoute();

  const [eventInformation, setEventInformation] = useState<
    GetCpeEventByIdQuery["getCpeEventById"] | null | undefined
  >();

  const [getEventInformation] = useGetCpeEventByIdLazyQuery();

  useEffect(() => {
    const { eventId } = params as { eventId?: string };

    if (eventId) {
      (async () => {
        const response = await getEventInformation({
          variables: { options: { id: eventId } },
        });

        if (response.data?.getCpeEventById) {
          setEventInformation(response.data.getCpeEventById);
        }
      })();
    }
  }, [params]);

  return (
    <View>
      <Text>EventRegistration</Text>
    </View>
  );
};

export default EventRegistration;
