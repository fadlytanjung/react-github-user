import type { FormUsernameValues } from "@/services/model";
import { Button, TextInput, Flex, Title, Text, InputLabel } from "@mantine/core";
import { useFormContext, Controller } from "react-hook-form";

export default function SearchBar({ loading }: { loading?: boolean }) {
  const { handleSubmit, control, formState } = useFormContext<FormUsernameValues>();

  const onSubmit = (data: FormUsernameValues) => {
    console.log("Submitted with username: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title mb={12}>Github repositories explorer 🚀</Title>
      <Text>Github Repositories Explorer is a web app that lets users search and view Github repositories by username or keyword. It's responsive and works well on both desktop and mobile devices.</Text>
      <InputLabel mt={24}>Username</InputLabel>
      <Flex direction={{ base: "column", sm: "row" }} align="start" justify="center" gap={16}>
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              placeholder="Enter github username"
              style={{
                width: '100%'
              }}
              {...error?.message && {
                error: error.message
              }}
            />
          )}
        />
        <Button
          w={{ base: "100%", sm: 180 }}
          type="submit"
          disabled={!formState.isValid}
          loading={loading}
        >
          Search
        </Button>
      </Flex>
    </form>
  );
}
