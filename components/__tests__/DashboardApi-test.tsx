import { readData, APIResponse, Gender, Species, Status } from '../../server/APIDasboard'
describe('readData', () => {
    it('should fetch data successfully', async () => {
        const mockResponse: APIResponse = {
            info: {
                count: 1,
                next: '',
                pages: 1,
                prev: null,
            },
            results: [
                {
                    created: new Date(),
                    episode: ['episode1'],
                    gender: Gender.Female,
                    id: 1,
                    image: 'image-url',
                    location: {
                        name: 'Location 1',
                        url: 'location-url',
                    },
                    name: 'Character 1',
                    origin: {
                        name: 'Origin 1',
                        url: 'origin-url',
                    },
                    species: Species.Alien,
                    status: Status.Alive,
                    type: 'Type 1',
                    url: 'character-url',
                },
            ],
        };

        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse),
        });

        const result = await readData();

        expect(fetch).toHaveBeenCalledWith(process.env.EXPO_PUBLIC_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        expect(result).toEqual(mockResponse);
    });

    it('should throw an error if API URL is not defined', async () => {
        delete process.env.EXPO_PUBLIC_API_URL;

        await expect(readData()).rejects.toThrow('API URL is not defined');
    });

    it('should throw an error if fetching data fails', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
        });

        await expect(readData()).rejects.toThrow('Failed to fetch data');
    });
});