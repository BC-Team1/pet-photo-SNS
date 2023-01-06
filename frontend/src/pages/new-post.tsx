import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Container,
  Stack,
  FormHelperText,
} from "@mui/material";
import Select from "@mui/material/Select";
import { petList } from "../lib/petApiClient";
import { createPost } from "../lib/postApiClient";

export async function getServerSideProps() {
  const pets = await petList.get("/");
  return {
    props: {
      pets: pets.data,
    },
  };
}

type Inputs = {
  user_id: number;
  pet_id: number;
  caption: string;
  image: string;
};

const NewPost = (props: any) => {
  const pets = props.pets;

  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      user_id: 1,
      pet_id: 1,
      caption: "",
      image: "",
    },
  });

  const validationRules = {
    caption: {
      required: "caption",
      minLength: { value: 1, message: "キャプションを記入してください。" },
    },
    pet_id: {
      validate: (value: number | "") => value !== "" || "選択してください。",
    },
  };

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);
    await createPost.post("/",data);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          spacing={2}
        >
          <h1>新規投稿</h1>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                required
                onChange={(e: any) => {
                  console.log(e.target.files[0])
                  field.onChange(e.target.files[0]);
                }}
              />
            )}
          />
          
          <Controller
            name="caption"
            control={control}
            rules={validationRules.caption}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="caption"
                multiline
                rows={4}
                variant="outlined"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="pet_id"
            control={control}
            rules={validationRules.pet_id}
            render={({ field, fieldState }) => (
              <FormControl fullWidth error={fieldState.invalid}>
                <InputLabel id="pet-select-label">ペットを選ぶ</InputLabel>
                <Select labelId="pet-select-label" label="pet-name" {...field}>
                  {pets.map((pet:any) => (
                    <MenuItem value={pet.id} key={pet.id}>
                      {pet.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Button variant="contained" type="submit">
            投稿する
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default NewPost;
